import { IGoalCard } from "@/interface/goals.interface";

export const goals: IGoalCard[] = [
    {
        icon: "./camera.svg",
        isCompleted: true,
        label: "Escola monitorada",
        points: 10
    },
    {
        icon: "./nurse.svg",
        isCompleted: false,
        label: "Acompanhamento psicológico",
        points: 40
    },
    {
        icon: "./qrcode.svg",
        isCompleted: true,
        label: "QR Code companheiro",
        points: 2
    }
    ,{
        icon: "./scan.svg",
        isCompleted: false,
        label: "Controle o acesso ao prédio da escola",
        points: 10
    },
    {
        icon: "./gateway.svg",
        isCompleted: false,
        label: "Fornecer treinamento de preparação",
        points: 10
    }
]