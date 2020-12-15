import Header from '../header/Header';

function Layout({children}){
  return(
    <div style={{display:'flex', justifyContent:'center'}}>
      <Header/>
      {children}
    </div>
  )
}

export default Layout;
