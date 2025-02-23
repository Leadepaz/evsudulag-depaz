export interface UserModelData {
    username: string;
    password: string;
    profile: {
        id: number;
        name: string;
        nickname: string;
        birthday: string;
        dream: string;
        talent: string;
        favshow: string;
        favmovie: string;
        favsinger: string;
        food: string;
        image: string;
    }
}