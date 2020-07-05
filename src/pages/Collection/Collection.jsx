import React from "react";
import { connect } from "react-redux";
import Card from "../../components/Card/Card";
import { CollectionContainer, ShopItemWrapper } from "./CollectionStyle";
import { selectCollection } from "../../Redux/ShoppageRedux/Selector";

function Collection({ shopData }) {
  return (
    <CollectionContainer>
      <h5>{shopData.title}</h5>
      <ShopItemWrapper>
        {shopData.items.map((data) => (
          <React.Fragment key={data.id}>
            <Card item={data}></Card>
          </React.Fragment>
        ))}
      </ShopItemWrapper>
    </CollectionContainer>
  );
}

const mapStateToProps = (state, ownProps) => ({
  shopData: selectCollection(ownProps.match.params.collectionName)(state),
});

export default connect(mapStateToProps)(Collection);
