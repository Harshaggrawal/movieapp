import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {loadHollywood} from '../action';
import Carousel from './carousel';

const initialState = {
  name: '',
  releaseYear: '',
  imgUrl: '',
  genre: '',
};

const image = {
  uri: 'https://img.freepik.com/free-vector/shining-bokeh-overlay-background_1409-778.jpg?size=626&ext=jpg&ga=GA1.2.1930299761.1657899141',
};

class Hollywood extends React.Component {
  state = initialState;

  loadHollywood = () => {
    this.props.dispatchLoadHollywood(this.state);
  };

  render() {
    const {MoviesHollywood} = this.props;

    return (
      <ImageBackground
        style={styles.container}
        source={image}
        resizeMode="cover"
        blurRadius={1}>
        <Carousel />
        <ScrollView style={styles.BooksContainer}>
          {MoviesHollywood.map((HollywoodMovie, index) => (
            <View style={styles.book} key={index}>
              <Image
                style={styles.Image}
                source={{uri: HollywoodMovie.imgUrl}}
              />
              <View style={styles.content}>
                <Text>{HollywoodMovie.name}</Text>
                <Text>{HollywoodMovie.genre}</Text>
                <Text>{HollywoodMovie.releaseYear}</Text>
                <View style={styles.iconView}>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={{
                        uri: 'https://img.icons8.com/material-rounded/2x/wish-list.png',
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={styles.icon}
                      source={{
                        uri: 'https://img.icons8.com/material-rounded/2x/wish-list.png',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  iconView: {
    flexDirection: 'row',
  },
  content: {
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
  BooksContainer: {
    width:'100%',
    flex: 1,
  },
  book: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 30,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
  },
  Moviename: {
    fontSize: 23,
  },
  Image: {
    borderRadius: 30,
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
});

const mapDispatchToProps = {
  dispatchLoadHollywood: HollywoodMovie => loadHollywood(HollywoodMovie),
};

const mapStateToProps = state => ({
  MoviesHollywood: state.HollywoodReducer.MoviesHollywood,
});

export default connect(mapStateToProps, mapDispatchToProps)(Hollywood);
