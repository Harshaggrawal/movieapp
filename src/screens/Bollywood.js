import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, ScrollView, Image, ImageBackground, TouchableOpacity} from 'react-native';
import {loadBollywood} from '../action';
import Carousel from './carousel';

const initialState = {
  name: '',
  releaseYear: '',
  imageUrl: '',
  genre:''
};

const image = {
    uri: "https://img.freepik.com/free-vector/shining-bokeh-overlay-background_1409-778.jpg?size=626&ext=jpg&ga=GA1.2.1930299761.1657899141",
  };

class Bollywood extends React.Component {
  state = initialState;

  loadBollywood = () => {
    this.props.dispatchLoadBollywood(this.state);
  };

  render() {
    const {Movies} = this.props;

    return (
      <ImageBackground style={styles.container}
      source={image}
      resizeMode="cover"
      blurRadius={1}>
        <Carousel />
        <ScrollView style={styles.BooksContainer}>
          {Movies.map((Movie, index) => (
            <View style={styles.book} key={index}>
              <Image style={styles.Image} source={{uri: Movie.imageUrl}} />
              <View style={styles.content}>
                <Text style={styles.Moviename}>{Movie.name}</Text>
                <Text>{Movie.genre}</Text>
                <Text>{Movie.releaseYear}</Text>
                <View style={styles.iconView}>
                    <TouchableOpacity style={{backgroundColor:'red'}}>
                    <Image style={styles.icon} source={{uri:'https://img.icons8.com/material-rounded/2x/wish-list.png'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image style={styles.icon} source={{uri:'https://cdn-icons.flaticon.com/png/128/3502/premium/3502704.png?token=exp=1659586401~hmac=7c1ac213d256278c7afd621b7a435dc6'}}/>
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
    backgroundColor:'blue',
    alignItems:'center',
    flex: 1,
    width:'100%'
  },
  iconView:{
    flex:1,
    // justifyContent:'space-evenly',
    flexDirection:'row'
  },
  content:{
    marginHorizontal:10
  },
  icon:{
    marginHorizontal:50,
    width:20,
    height:20
  },
  BooksContainer: {
    width:'100%',
    flex: 1,
  },
  book: {
    // width:'70%',
    marginHorizontal:20,
    marginVertical:5,
    borderRadius:30,
    backgroundColor:'white',
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
    borderRadius:30,
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
});

const mapDispatchToProps = {
  dispatchLoadBollywood: Movie => loadBollywood(Movie),
};

const mapStateToProps = state => ({
  Movies: state.MovieReducer.Movies,
});

export default connect(mapStateToProps, mapDispatchToProps)(Bollywood);
