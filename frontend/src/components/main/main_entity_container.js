import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MainEntity from './main_entity';

const mapStateToProps = (
  { entities: {
      habits: {
        all: allHabits
      }
  },
    ui:
    { display:
      {
        height: windowHeight,
        width: windowWidth,
      }
    }
  },
  { match: { params } }
) => {
  const { habitId } = params ? params : {};
  if(!habitId) return {};

  return {
    habitId,
    windowHeight,
    windowWidth,
    habit: allHabits[habitId],
  }
}

export default withRouter(connect(mapStateToProps)(MainEntity));
