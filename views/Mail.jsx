const React = require('react')
import Bars from './Bars'
import SearchBar from './SearchBar'
import Sidebar from './SideBar'
import MailMainComponent from './MailMainComponent'
import Logout from './Logout';
import LoginPage from './LoginPage'
export default class Mail extends React.Component {
    render () {
        if(!this.props) {
            return <LoginPage />
        }
        return (
            <html>
                <head>
                </head>
                <body>
                    <div className="header">
                        <Bars />
                        <SearchBar />
                        <Logout />
                    </div>
                    <div className="main">
                        <Sidebar object={this.props.object.emails}/>
                        <MailMainComponent object2={this.props.object}/>
                    </div>
                </body>
            </html>
            )
    }
}