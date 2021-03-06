import React, { Component } from 'react';

class RoomList extends Component {
  render() {
    return (
      <div>
        {/* Determines whether use is set. If user does not equal "Guest", the list of chat rooms is displayed */}
        {this.props.user !== 'Guest'
            && (
            <div id="roomsList">
                {/* Map over each room in the array of rooms to display buttonsn to edit and delete room */}
                {this.props.rooms.map(room => (
                  <ul key={room.key}>
                    <button className="roomList" type="button" onClick={() => this.props.handleRoomChange(room)}>{room.roomId}</button>
                    <button className="deleteButton" type="button" value="delete" onClick={() => this.props.deleteRoom(room.key)}>X</button>
                    {this.props.activeRoom === room.roomId
                        && (
                        <form onSubmit={e => this.props.editRoom(e, room.key)}>
                          <label htmlFor="editRoom" />
                          <input className="allInputs" type="text" id="editRoom" placeholder="Edit Name" onChange={e => this.props.handleEditRoom(e)} />
                          <input className="allButtons" type="submit" value="Edit" />
                        </form>
                        )
                    }
                  </ul>
                ))}
            </div>
            )
        }
      </div>
    );
  }
}

export default RoomList;
