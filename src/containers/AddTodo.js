import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';

// Input styling for responsive screen
const ResponsiveInput = styled(Input)(({ theme }) => ({
  width: '70%',
  [theme.breakpoints.down('sm')]: {
    width: '60%',
  },
  [theme.breakpoints.down('xs')]: {
    width: '50%',
  },
}));

const AddTodo = ({ dispatch }) => {
  let input = React.createRef();

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.current.value.trim()) {
            return;
          }
          dispatch(addTodo(input.current.value));
          input.current.value = '';
          input.current.focus();
        }}
      >
        <ResponsiveInput inputRef={input} />
        <Button
          variant="contained"
          type="submit"
          sx={{
            marginLeft: '10px',
            borderRadius: '30px',
            backgroundColor: "#1C1D1F",
            '&:hover': {
              backgroundColor: "white",
              color: "#1C1D1F",
            },
          }}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
