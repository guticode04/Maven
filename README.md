# Maven
Maven, a Genius clone, is a music application that allows users to share their music knowledge.

[Live Demo](https://clone-genius.herokuapp.com/?#/)

## Technologies
* Backend:
    * Rails
    * ActiveRecord
    * PostgreSQL
* Frontend:
    * React
    * Redux

## Features

### User Auth

Secure backend to frontend authentication using BCrypt. Users can create an account and confidently know that their information is secure.

### Editing a Track

Logged in users have the ability to edit track lyrics. Editing the lyrics does not redirect from the tracks show page instead the form shows up on the track show page with the lyrics prefilled in the textarea.

```javascript
{ 
   this.state.show ? (
    <div className="edit-form">
      <form>
       <textarea
         className="lyrics-text"
         value={this.state.lyrics}
         onChange={this.handleInput('lyrics')} 
        />
      </form>
    </div>
    ) : <p>{track.lyrics}</p>
 }
```

Logged in users also have the option of deleting a track entirely. Once it is verified that a user exists then the user has access to buttons to handle either editing track lyrics or deleting the track. 

```javascript
  {this.props.currentUser && (
     <>
     <button className="edit-btn" onClick={this.showForm}>
      Edit Lyrics
     </button>
     <button className="delete-btn" onClick={this.deleteTrack}>
      Delete Track
     </button>
    </>
   )}
```
