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
      { activeElement: _id }
    }
  }
) => {
  if(!_id) return {};
  const habit = allHabits[_id];

  return {
    _id,
    habit,
  }
}

export default connect(mapStateToProps)(MainEntity);
