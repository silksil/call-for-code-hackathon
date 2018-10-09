import React, { Component } from 'react';
import { Field } from 'redux-form';

import DropDownSelector from '../shared/form/dropDownSelector';
import { skills, skillLevel } from '../../utils/skills';

class ProfileSkills extends Component {
  componentWillMount() {
    const { fields } = this.props;
    if (!fields.length) fields.push();
  }

  render() {
    const { fields } = this.props;
    return (
      <div className="card card-dark" id="skills-card">
        <h3>
          SKILLS
        </h3>
        {fields.map((skill, index, length) => (
          <div id="skills-content" key={index}>
            <button
              key={`button.${index}`}
              type="button"
              className="btn-remove"
              id="btn-remove"
              onClick={() => fields.remove(index)}
            />
            <h4>#{index + 1}</h4>
            <Field
              key={`type.${index}`}
              name={`${skill}.type`}
              type="text"
              component={DropDownSelector}
              label="Skill"
              data={skills}
              className="input-box input-dark dropdown"
            />
            <Field
              key={`level.${index}`}
              name={`${skill}.level`}
              type="text"
              component={DropDownSelector}
              className="input-box input-dark dropdown"
              label="Skill Level"
              data={skillLevel}
            />
          </div>
        ))}
        <button type="button" className="btn-add btn-blue" id="btn-skills" onClick={() => fields.push({})}>
          +
        </button>
      </div>
    );
  }
}

export default ProfileSkills;
