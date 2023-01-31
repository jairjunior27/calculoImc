import { youImc } from "../components/GridItem.styles";

export type level = {
    title: string,
    color: string,
    icon: 'up' | 'down'
    imc: number[];
  
    youImc?: number;
};

export const levels: level[] = [
    {title:'MAGREZA',color:'#757575',icon:'down',imc:[0,18.4]},
    {title:'NORMAL',color:'#12A204',icon:'up',imc:[18.5,24.9]},
    {title:'SOBREPESO GRAU I',color:'#981DD1 ',icon:'down',imc:[25,29.9]},
    {title:'OBESIDADE GRAU II',color:'#870921 ',icon:'down',imc:[30,39.9]},
    {title:'OBESIDADE GRAU III',color:'#DE0000  ',icon:'down',imc:[40,99]},
];

export const calculadoraImc = (altura: number , peso: number) => {
  let imc = peso /(altura* altura);

  for(let i in levels){
    if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
        let copyYouImc: level = {...levels[i]}
        copyYouImc.youImc = parseFloat(imc.toFixed(2))
        return copyYouImc
    }
    
  }
    return null;
};
