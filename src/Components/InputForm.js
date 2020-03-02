import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const InputForm = props => {
    // from App
  const { updateLeaderboardArray } = props;

    // ==== HANDLE USER INPUT ====
  const initialInputState = { player: '', score: '' };
  // useState returns two values: the state & function used to modify the state
  const [eachEntry, setEachEntry] = useState({ initialInputState });
  const { player, score } = eachEntry;

  const handleInputChange = e => {
    // takes name and maps it to the value that's passed in input & stores it in the state
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };
  // console.log(eachEntry);

  // ==== HANDLE SUBMIT ====
  const handleFinalSubmit = e => {
    updateLeaderboardArray(eachEntry);
    //console.log(eachEntry);
  };

  return (
    <div>
      <Row>
        <Col sm='12' md={{ size: 6, offset: 3 }} className='text-center'>
          <h2>Leaderboard</h2>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for='player'>Player</Label>
              <Input
                name='player'
                value={player}
                placeholder='Ex: Player 1'
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for='score'>Score</Label>
              <Input
                name='score'
                value={score}
                placeholder='Ex: 32342'
                onChange={handleInputChange}
              />
            </FormGroup>
            <Button onClick={handleFinalSubmit}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
