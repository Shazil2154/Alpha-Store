const CartItem = ({img, disp, price}) => {
    return(
        <div className="dt mw6 pv1 pv2-m pv3-ns">
  <div className="dtc v-top">
    <img src={img} alt="A bright blue sky" className="mw5 db" />
  </div>
  <div className="dtc v-top pl3">
    <p className="lh-copy mv0">
      {disp}
    </p>
  </div>
  <div className="dtc v-btm pl3">
    <p className="lh-copy mv0">
      <strong>{price}$</strong>
    </p>
  </div>
</div>
    );
}
export default CartItem;