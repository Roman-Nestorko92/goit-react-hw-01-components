import './App.css';
import UserProfile from './components/Profile/UserProfile';
import Statistics from './components/Statistic/Statistics';
import FriendListItem from './components/Friends/FriendsListItems';
import TransactionHistory from './components/Transaction/TransactionHistory';
import transaction from './data/transactionHistory';
import profile from 'data/profile';
import friends from './data/friends';
import upload from './data/statistic';
import styled from '@emotion/styled';

function App() {
  return (
    <Container>
      <UserProfile profile={profile} />
      <Statistics title={'Upload'} stats={upload} />
      <FriendListItem friends={friends} />
      <TransactionHistory transaction={transaction} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  padding-top: 20px;
`;

export default App;
