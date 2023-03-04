import "./App.css"
import BlogUserProfile from "./components/BlogUserProfile"
import Statistics from "./components/Statistics"
import FriendListItem from "./components/FriendsListItem"
import TransactionHistory from "./components/TransactionHistory"
import transaction from "./components/data/transactionHistory"
import friends from "./components/data/friends"
import upload from "./components/data/statistic"
import styled from "@emotion/styled"

function App() {
  return (
    <Container>
      <BlogUserProfile />
      <Statistics
        title={"Upload"}
        stats={upload}
      />
      <FriendListItem friends={friends} />
      <TransactionHistory transaction={transaction} />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 auto;
  width: 1200px;
  border: 1px solid black;
  padding-top: 20px;
`

export default App
