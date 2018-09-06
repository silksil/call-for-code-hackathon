import React from 'react';
import { Field } from 'redux-form';

import DropDownSelector from '../shared/form/dropDownSelector';
import { skills, skillLevel} from '../../utils/skills';

const Skills= ({ fields, meta: { error, touched} }) => (
  <div className='card card-dark'>
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>
          Add Skill
        </button>
      </li>
      {fields.map((skill, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Skill"
            onClick={() => fields.remove(index)}
          />
        <h4>Skill #{index + 1}</h4>
          <Field
            key={`type.${index}`}
            name={`${skill}.type`}
            type="text"
            component={DropDownSelector}
            label="Skill"
            data={skills}
          />
          <Field
            key={`level.${index}`}
            name={`${skill}.level`}
            type="text"
            component={DropDownSelector}
            label="Skill Level"
            data={skillLevel}
          />
        </li>
      ))}
    </ul>
  </div>
)

export default Skills;
