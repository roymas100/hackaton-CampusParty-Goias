export interface ISchool {
    id: number,
    name : string,
    description : string
    location : string
    metrics : {
        darkWeb : {
            amount : number
            sites : string[]
        }
        violence : {
            professorAndStudent : number
            studentAndStudent : number
        },
        ouvidoria : {
            amount : number
            manifestacao : {
                id : number
                name : string
                type : string
                
            }[]
        }
    }
}