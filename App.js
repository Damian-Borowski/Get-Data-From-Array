import React, { Component } from 'react';
import './App.css';

const data = [
  { id: 1, title: 'Pierwsza wiadomość', body: 'Zawartość wiadomości nr 1' },
  { id: 2, title: 'Druga wiadomość', body: 'Zawartość wiadomości nr 2' },
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer${index}`,
    body: `Zawartość wiadomości nr${index}`
  })
}, 2000)

class App extends Component {
  state = {
    comments: [...data]
  }

  getData = () => {
    this.setState({
      comments: [...data]
    })
    console.log("aktualizacja");
  }

  componentDidMount() {
    this.idI = setInterval(this.getData, 3000)
  }

  UNSAFE_componentWillMount() {
    clearInterval(this.idI)
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h1>{comment.title}</h1>
        <h2>{comment.body}</h2>
      </div>
    ))
    return (
      <div className='App'>
        {comments}
      </div>

    );
  }
}

export default App;