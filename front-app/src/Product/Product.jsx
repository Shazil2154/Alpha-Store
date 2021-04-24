const Product = ({img, disp, price, onClick}) => {

    return (
            <div className=' dib br3 pa3 ma2 grow bw2 '>{/* bg-light-gray shadow-5 */}
			<img src={img}
			 alt="profile-pic"
			 width="200px"
			 height="auto"
			/>
			<h6>{disp}</h6>
			<h4>{price}$</h4>
			<p
			 onClick={()=>onClick({
				 img: img,
				 disp: disp,
				 price: price
			 })}
			 className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1 pointer"
			>
			 Add To Cart
			</p>
			
			
		</div>

    );
}
export default Product;
