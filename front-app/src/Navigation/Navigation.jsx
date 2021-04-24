import './Navigation.css';
const Navigation = ({onClick}) => {
   return (
       <div className='nav bg-dark-gray white garamond f4'>
           <div className='nav__logo w-20 pl2 courier b f4'><p>Alpha-Store</p></div>
           <div className='nav__search pt3  w-60'>
               <input type='text' placeholder='Search' className='bg-black white h2-ns' />
           </div>
           <div className='w-10 nav__signin'>
               <p>Sign In</p>
           </div>
           <div className='nav__bucket link dim w-10 mr2' onClick={()=>onClick('cart')}>
               <p className="pointer">Bucket</p>
           </div>
       </div>
   ); 
}
export default Navigation;