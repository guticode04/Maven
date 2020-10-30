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

* Tracks
  * Users can add tracks that are not currently found in the database.
* Annotations
  * Users can add annotations to the lyrics of tracks adding insight as to what the artist is truly saying.
* Comments 
  * Users can add comments on their favorite tracks.

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

### Annotatoins

#### getSelection()
The means by which annotations become a possibility. When highlighting lyrics and calling ```window.getSelection()```, produces the start and end indicies of your selection but only within the parent HTML Element, which in this case is ```<p>``` tag. Once a link to an annotation is nested in ass an ```<a>``` tag, the API's ability to get the proper indices is disrupted. This drawback was overcome with the following code.
```javascript
  mouseUpHandler(e) {
    const { track, annotations } = this.props;
    let trackAnnotations = annotations.filter(annotation => annotation.track_id === track.id);

    let offsetForSelection = parseInt(this.state.beginSelection.dataset.offset);

    let endSelection = parseInt(e.target.dataset.offset);

    let startIdx = window.getSelection().anchorOffset + offsetForSelection;
    let endIdx = window.getSelection().focusOffset + endSelection;

    if( !(startIdx) || !(endIdx) ) {
      this.setState({
        beginSelection: null
      });
      return null;
    }

    for ( let i = 0; i < trackAnnotations.length; i++ ) {
      let annotationStartIdx = Math.min(trackAnnotations[i].start_idx, trackAnnotations[i].end_idx);
      let annotationEndIdx = Math.max(trackAnnotations[i].start_idx, trackAnnotations[i].end_idx);
      //for new annotation overlap outside/inside existing annotation
      if( (annotationStartIdx >= startIdx) && (annotationEndIdx <= endIdx) ) {
        this.setState( { beginSelection: null } );
        return null;
      }
    }

    this.setState({
      startIdx: startIdx,
      endIdx: endIdx,
      annotatedText: window.getSelection().toString(),
      beginSelection: null, //resets for next selection
    })

    if (!e.target.classList.contains('highlight-annotation')){
      this.setState({
        getAnnotationId: null
      })
    }
    
  }
```
