import styled from "styled-components"

export const Textarea = styled.textarea.attrs(props => ({
  type: props.type,
  rows: props.rows,
  placeholder: props.placeholder,
}))`
  width: 100%;
  font-size: 15px;
  width: -moz-available;
  width: -webkit-fill-available;
  padding: 8px;
  margin: 0;
  color: #f9a826;
  border: ${({ feedback }) =>
    feedback ? "2px solid #E53E3E" : "2px solid #f9a826"};
  border-radius: 5px;
  border-bottom-right-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
  border-bottom-left-radius: ${({ feedback }) => (feedback ? "0px" : "5px")};
  ::placeholder {
    color: #a0aec0;
  }
`
