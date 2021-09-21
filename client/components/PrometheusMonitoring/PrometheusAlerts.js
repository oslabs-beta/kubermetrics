import React from 'react'


class PrometheusAlerts extends React.Component {
  render() {
      //suppose user is received from props
      const { user } = this.props
      return (

            <iframe
            width="100%"
            height="1000px"
            src={"http://localhost:9090/alerts"}
            />
      )
  }
}
export default PrometheusAlerts