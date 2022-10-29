import { Controls } from 'components/Controls/Controls';
import { Progress } from 'components/Progress/Progress';
import { Publication } from 'components/Publication/Publication';
import { Component } from 'react';
import { Container } from './Reader.styled';

export class Reader extends Component {
  state = {
    index: 0,
  };

  onPrev = () => {
    this.setState(state => ({ index: state.index - 1 }));
  };

  onNext = () => {
    this.setState(state => ({ index: state.index + 1 }));
  };

  render() {
    const { onPrev, onNext } = this;
    const { index } = this.state;
    const currentItem = this.props.items[index];
    return (
      <Container>
        <Controls
          current={index + 1}
          total={this.props.items.length}
          onClickPrev={onPrev}
          onClickNext={onNext}
        />
        <Progress current={index + 1} total={this.props.items.length} />
        <Publication item={currentItem} />
      </Container>
    );
  }
}
