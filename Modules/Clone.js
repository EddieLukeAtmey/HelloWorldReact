'use strict';

class Clone extends Component {
  render() {

    if (this.props.depth > 5) return (
      <Text
      style={styles.normalText}>
      The end
      </Text>
    );

    return (
      <View style= {{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#000000', borderStyle: 'solid' }}>
      <Clone depth={ this.props.depth + 1}/>
      </View>
    );
  }
}

export default Clone;
