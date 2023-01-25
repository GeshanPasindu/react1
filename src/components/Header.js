
import Boader from "./Boader";


 const Header = ({title,onAdd,show}) => {
  
  
  return (
    
        <header className = 'header'>
        <h1>{title}</h1>
        <Boader text={show ? 'Close' : 'add'} color = {show ? 'red' : 'green'} onclick={onAdd} />
        
        
    </header>
   

    
  )
}

Header.defaultProps ={
    h1:'header'
}

export default Header;