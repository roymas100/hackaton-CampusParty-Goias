export interface ISchool {
    id: number,
    name : string,
    description : string
    location : string
    progress: number
    goals: {
        monitoria: boolean
        acompanhamento: boolean
        qrcode: boolean
        controleDeAcesso: boolean
        treinamento: boolean
    },
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