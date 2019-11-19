import React, { Component } from 'react';
import axios from 'axios'

class Members extends Component {
  state = {
    members: []
  }

  componentDidMount() {
    axios.get('http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=L&valkrets=&rdlstatus=&org=&utformat=json&sort=sorteringsnamn&sortorder=asc&termlista=')
      .then((response) => {
        this.setState({ members: response.data.personlista.person })
      })
  }


  render() {
    let membersList = this.state.members.map(member => {
      return (
        <li key={member.sourceid}>
          <img src={member.bild_url_80} className="avatar" />
          {`${member.tilltalsnamn} ${member.efternamn}`}
        </li>
      )
    })
    return (
      <>
        <h1>Members of the parliament - Liberal Party</h1>
        <ul>
          {membersList}
        </ul>
      </>
    );
  }
}

export default Members;