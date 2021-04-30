import { connect } from 'react-redux';
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
        activeElement: habitId,
        height: windowHeight,
        width: windowWidth,
      }
    }
  }
) => {
  if(!habitId) return {};

  return {
    habitId,
    windowHeight,
    windowWidth,
    habit: allHabits[habitId],
  }
}

export default connect(mapStateToProps)(MainEntity);
