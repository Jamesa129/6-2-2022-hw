



class App extends React.Component{
    render(){
        return(
            <div className = "allParts">
                <Subpart text = "uno"/>
                <Subpart text = "dos"/>
                <Subpart text = "tres"/>

                <Sidebar/>
                <Mainbar/>    

            </div>
        )
    }
}

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">Side bar</div>
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

