import React, { Component } from 'react';
import axios from 'axios'
import { Header, Li, Ul } from './styles/theme'


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
      let response = await axios.get('http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=L&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=')
      this.setState({ members: response.data.personlista.person, filtered: false })

    } catch (error) {

    }
  }

  filterMembers(gender) {
    let filtered = this.state.members.filter(member => member.kon === gender)
    this.setState({ members: filtered, filtered: true })
  }


  render() {
    let membersList = this.state.members.map(member => {
      return (
        <Li key={member.sourceid}>
          <img src={member.bild_url_80} className="avatar" />
          {`${member.tilltalsnamn} ${member.efternamn}`}
        </Li>
      )
    })
    return (
      <>
        <Header liberal>Members of the parliament - Liberal Party</Header>
        <Ul>
          {membersList}
        </Ul>
        <button
          disabled={this.state.filtered}
          onClick={this.filterMembers.bind(this, 'man')}
        >Filter men</button>
        <button
          disabled={this.state.filtered}
          onClick={this.filterMembers.bind(this, 'kvinna')}
        >Filter women</button>

        <button
          onClick={this.fetchMembers.bind(this)}
          disabled={!this.state.filtered}
        >
          Reset
        </button>
      </>
    );
  }
}

export default Members;