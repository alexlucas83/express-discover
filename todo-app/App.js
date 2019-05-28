import React from 'react';
import { Text, View, FlatList, SafeAreaView, TextInput, Button } from 'react-native';
import url from './utils/url';
import Axios from 'axios';
import styles from './AppStyle';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      title: '',
      body: '',
      userId: 1,
      isDone: false
    };
  }

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    Axios.get(`${url.baseUrl}/todos`)
      .then((response) => { this.setState({ todos: response.data.todos }); })
      .catch((error) => { console.log(error); });
  }

  createTodo() {
    Axios.post(`${url.baseUrl}/todos`, {
      title: this.state.title,
      body: this.state.body,
      userId: this.state.userId,
    })
      .then((response) => {
        this.fetchTodos();
        this.setState({ title: '', body: '' });
      })
      .catch((error) => { console.log(error); });
  }

  deleteTodo(id) {
    Axios.delete(`${url.baseUrl}/todos/${id}`)
      .then((response) => { this.fetchTodos(); })
      .catch((error) => { console.log(error); });
  }

  render() {
    console.log(this.state);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <FlatList
            data={this.state.todos}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text style={styles.item}>{item.title}</Text>
                  <Button
                    onPress={() => this.deleteTodo(item.id)}
                    title="Delete ME"
                    color="#841584"
                  />
                </View>
              );
            }}
            keyExtractor={(item, index) => item.id.toString()}
          />
        </View>
        <View style={styles.form}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ title: text })}
            value={this.state.title}
            placeholder="Titre"
          />
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ body: text })}
            value={this.state.body}
            placeholder="Description"
          />
          <Button
            onPress={() => this.createTodo() }
            title="Learn More"
            color="#841584"
          />
        </View>
      </SafeAreaView>
    );
  }
}
