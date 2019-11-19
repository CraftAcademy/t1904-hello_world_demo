import React, { Component } from 'react';
import axios from 'axios'
import { Header } from './styles/theme'
import { List, Image, Button } from 'semantic-ui-react'

class Members extends Component {
  state = {
    members: [],
    filtered: false
  }

  componentDidMount() {
    this.fetchMembers()
  }

  async fetchMembers() {
    try {
      let response = await axios.get('https://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=L&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=')
      this.setState({ members: response.data.personlista.person, filtered: false })

    } catch (error) {

    }
  }

  filterMembers(gender) {
    let filtered = this.state.members.filter(member => member.kon === gender)
    this.setState({ members: filtered, filtered: true })
  }


  render() {
    // debugger

    let membersList = this.state.members.map(member => {
      return (
        <List.Item key={member.sourceid}>
          <Image avatar src={member.bild_url_80} />
          <List.Content>
            <List.Header as='h3'>{`${member.tilltalsnamn} ${member.efternamn}`}</List.Header>
            <List.Description>
              {member.valkrets}
            </List.Description>
          </List.Content>
        </List.Item>



        // <Li key={member.sourceid}>
        //   <img src={member.bild_url_80} className="avatar" />
        //   {`${member.tilltalsnamn} ${member.efternamn}`}
        // </Li>
      )
    })
    return (
      <>
        <Header liberal>Members of the parliament - Liberal Party</Header>
        <List>
          {membersList}
        </List>
        <Button
          disabled={this.state.filtered}
          onClick={this.filterMembers.bind(this, 'man')}
        >Filter men</Button>
        <Button
          disabled={this.state.filtered}
          onClick={this.filterMembers.bind(this, 'kvinna')}
        >Filter women</Button>

        <Button
          onClick={this.fetchMembers.bind(this)}
          disabled={!this.state.filtered}
        >
          Reset
        </Button>
      </>
    );
  }
}

export default Members;