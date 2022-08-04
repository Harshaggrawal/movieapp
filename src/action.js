export const LOAD_BOLLYWOOD = 'LOAD_BOLLYWOOD';
export const LOAD_HOLLYWOOD='LOAD_HOLLYWOOD';

export function loadBollywood(Movie){
    return {
        type: LOAD_BOLLYWOOD,
        Movie:{
            ...Movie,
        }
    }
}

export function loadHollywood(HollywoodMovie){
    return {
        type: LOAD_HOLLYWOOD,
        HollywoodMovie:{
            ...HollywoodMovie
        }
    }
}