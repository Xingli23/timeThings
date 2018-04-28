import React from 'react'
import { TabBar } from 'antd-mobile'

class NavLan extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <TabBar>
          <TabBar.Item
            icon={{ 
              background: require(`./img/company.png`)
            }}
            selectedIcon={{ uri: require(`./img/company_active.png`) }}
            title="公司"
            key="Comopany"
            onPress={() => {
              
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require(`./img/job.png`) }}
            selectedIcon={{ uri: require(`./img/job_active.png`) }}
            title="职位"
            key="Job"
            onPress={() => {
              
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require(`./img/message.png`) }}
            selectedIcon={{ uri: require(`./img/message_active.png`) }}
            title="消息"
            key="Message"
            onPress={() => {
              
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: require(`./img/me.png`) }}
            selectedIcon={{ uri: require(`./img/me_active.png`) }}
            title="消息"
            key="Me"
            onPress={() => {
              
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}

export default NavLan