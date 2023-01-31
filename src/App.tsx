import { ChangeEvent, useState } from 'react'
import * as C from './App.styles'
import imgLogo from './assets/imcLogo.png'
import { GridItem } from './components/GridItem'
import { levels,level, calculadoraImc } from './heapers/imc'
import leftarrow from './assets/leftarrow.png'


const App = () =>{
  const [inputAltura, setInputAltura] = useState<number>(0)
  const [inputPeso, setInputPeso] = useState<number>(0)
  const [toShow, setToShow] = useState<level | null>(null)

  const handleInputAltura = (e: ChangeEvent<HTMLInputElement>) =>{
  setInputAltura(parseFloat(e.target.value))
  }

  const handleInputPeso = (e: ChangeEvent<HTMLInputElement>) =>{
   setInputPeso(parseFloat(e.target.value))
  }

  const handleClickCalcular =()=>{
     if(inputAltura && inputPeso){
     setToShow(calculadoraImc(inputAltura,inputPeso))
     }else{
      alert('Favor preencher todos os campos')
     }
  }

  const handleReset = () =>{
    setInputPeso(0)
    setInputAltura(0)
    setToShow(null)
  }
 return(

 <C.main>
  <C.header>
      <C.headerContainer>
        <img src={imgLogo} alt="" width={200} />
      </C.headerContainer>
  </C.header>
  <C.container>
    <C.sideLeft>
     <C.h1>Calcule seu Imc.</C.h1>
     <C.p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</C.p>
     
      <C.input  type="number"
      placeholder='Digite sua altura EX: 1.83 (EM METROS)'
      value={inputAltura > 0 ? inputAltura : ''}
      onChange={handleInputAltura}
      disabled={toShow ? true : false}
      />
      <C.input
      type='number'
      placeholder='Digite seu peso EX: 95.4 (EM KG)'
      value={inputPeso > 0 ? inputPeso : ''}
      onChange={handleInputPeso}
      disabled={toShow ? true : false}
      />

    <C.button onClick={handleClickCalcular} disabled={toShow ? true : false}>Calcular</C.button>
    </C.sideLeft>
    <C.sideRight>
      
{!toShow && 
  <C.Grid>
{levels.map((item,index)=>(
  <GridItem key={index} item={item}/>
 ))}
</C.Grid>
}

{toShow && 
<>
<C.rightBig>
  <C.rightArrow>
    <img src={leftarrow} alt="" width={25} onClick={handleReset} />
  </C.rightArrow>
</C.rightBig>

<GridItem item={toShow}/>
</>
}
   
    </C.sideRight>
  </C.container>
  <C.footer>Desenvolvido por Jr.Criações</C.footer>
 </C.main>
 )
}

export default App;