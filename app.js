

class App extends React.Component{
    render(){
        return(
            <div className = "allParts">
                <Subpart text = "uno"/>
                <Subpart text = "dos"/>
                <Subpart text = "tres"/>

                <Sidebar text = "sidebarrr!!"/>
                <Mainbar/>    
            </div>
        )
    }
}

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
            Side bar
                <div className="sidebar2">
                    uno!
                    <div className="sidebar3"> 
                        dos!
                    </div>
                
                </div>
            </div>
            )
          
        }
    }

    
    class Subpart extends React.Component{
        render(){
            return(
                <div className="subpart">Subpart</div>
                )
            }
        }
        
        class Mainbar extends React.Component{
            render(){
                return(
                    <div className="mainbar">Mainbar
                    <Minibar/>
            </div>
        )
    }
   }
class Minibar extends React.Component{
    render(){
        return(
            <div className = "minibar">minibar</div>
        )
    }
}

ReactDOM.render(
   <App/>,

    document.querySelector('main')
  );

