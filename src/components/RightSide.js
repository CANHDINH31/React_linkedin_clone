import styled from "styled-components";
import React from "react";

function RightSide(props) {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your friend</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all Recommendation
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/54142997_1319516998205158_4061516100972576768_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=h35gwDoky_wAX9LF1Vz&_nc_ht=scontent.fhan5-3.fna&oh=00_AT-r0eji8Rj1d_KV_83gMZY8azf1CnRy10dDbNdv9oGSug&oe=62275DB2"
          alt=""
        />
      </BannerCard>
    </Container>
  );
}

export default RightSide;

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 80px;
  background: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 0 0 rgba(0, 0, 0, 0.2);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.8);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 400px;
      text-align: center;
      outline: none;
    }
  }
`;

const Avatar = styled.div`
  background-image: url("https://scontent.fhan5-3.fna.fbcdn.net/v/t1.6435-9/54142997_1319516998205158_4061516100972576768_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=h35gwDoky_wAX9LF1Vz&_nc_ht=scontent.fhan5-3.fna&oh=00_AT-r0eji8Rj1d_KV_83gMZY8azf1CnRy10dDbNdv9oGSug&oe=62275DB2");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
