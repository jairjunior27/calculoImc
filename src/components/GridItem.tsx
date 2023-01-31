import { level } from '../heapers/imc'
import * as C from './GridItem.styles'
import imgUp from '../assets/up.png'
import imgDown from '../assets/down.png'

type props = {
    item: level
}
export const GridItem = ({item}:props) =>{
    return(
        <C.main style={{backgroundColor: item.color}}>

         <C.gridIcon>
            <img src={item.icon === 'up' ? imgUp : imgDown} alt="imagem up ou down" width={30} />
         </C.gridIcon>

         <C.gridTitle>{item.title}</C.gridTitle>
         <C.gridInfo>
            {item.youImc && 
              <C.youImc>Seu imc é {item.youImc} kg/m²</C.youImc>
            }
            <>
            <C.textImc>
            Imc está entre <br/> <strong>{item.imc[0]} e {item.imc[1]}</strong>
            </C.textImc>
           
            </>
         </C.gridInfo>

        </C.main>
    )
}