class Clicks extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               count: 0,
               warning: false
          };
          this.handleClick = this.handleClick.bind(this);
     }

     handleClick() {
          const count = this.state.count;
          if(this.state.count <= 19) {
               this.setState({
                    count: count + 1
               });
          } else if (count >= 20 && count <= 99) {
               this.setState({
                    count: count + 10
               });
          } else if (count >= 100 && count <= 2999) {
               this.setState({
                    count: count + 100
               });
          } else if (count >= 3000) {
               this.setState({
                    warning: true
               });
               this.setState({
                    count: count + 1
               });
          }
     }

     render() {
          return (
               <div>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                         Press me
                    </button>
                    <p className="lead mt-1">You have clicked: {this.state.count}</p>
                    {this.state.warning ? (<div className="alert alert-warning">Okey now stop it! It's too much for now!</div>) : this.state.warning == false}
               </div>
          );
     }
}

function FormattedDate(props) {
     return <p className="lead">It is {props.date.toLocaleTimeString()}</p>;
}

class Clock extends React.Component {
     constructor(props) {
          super(props);
          /**
           * WARNING: Do NOT modify State Directly!
           * You can only assign this.state in the constructor!
           */
          this.state = {date: new Date()};
     }

     /**
      * Lifecycle hooks
      */
     componentDidMount() {
          this.timerID = setInterval(
               () => this.tick(),
               1000
          );
     }

     componentWillUnmount() {
          clearInterval(this.timerID);
     }

     tick() {
          this.setState({
               date: new Date()
          });
     }

     render() {
          return (
               <div>
                    <h1 className="display-3">Hello React State</h1>
                    <FormattedDate date={this.state.date} />
                    <Clicks />
               </div>
          );
     }
}

ReactDOM.render(
     <Clock />,
     document.getElementById('app')
);