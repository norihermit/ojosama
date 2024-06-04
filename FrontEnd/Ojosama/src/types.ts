export type DramaResponse = {
    "id" : number;
    "dramaName" : string;
    "dramaCountry" : string;
    "dramaIntro" : string;
    "dramaYear" : number,
    "dramaEpisode" :number
    "_links" : {
    "self" : {
        "href" : string;
    },
    "drama" : {
        "href" : string;
    }
    }
}
export type Drama = {
    "id" : number;
    "dramaName" : string;
    "dramaCountry" : string;
    "dramaIntro" : string;
    "dramaYear" : number;
    "dramaEpisode" :number;
}

export type DramaEntry = {
    drama: Drama;
    url: string;
}