import { Controls } from 'components/Controls/Controls';
import { Progress } from 'components/Progress/Progress';
import { Publication } from 'components/Publication/Publication';
import { Component } from 'react';
import { Container } from './Reader.styled';

const LS_KEY = `reader_item_index`;
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

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

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
