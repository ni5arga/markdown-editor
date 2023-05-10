import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { FiSave } from 'react-icons/fi';
import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EditorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

const Editor = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Preview = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  background-color: #2ecc71;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #27ae60;
  }
`;

const App = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
  }, [markdown]);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify({ markdown }),
      });
      if (response.ok) {
        alert('Document saved successfully!');
      } else {
        alert('Error saving document.');
      }
    } catch (error) {
      console.error('Error saving document:', error);
    }
  };

  return (
    <Container>
      <Title>Markdown Editor</Title>
      <EditorContainer>
        <Editor value={markdown} onChange={handleMarkdownChange} />
        <Preview>
          <ReactMarkdown>{preview}</ReactMarkdown>
        </Preview>
      </EditorContainer>
      <SaveButton onClick={handleSave}>
        <FiSave style={{ marginRight: '5px' }} />
        Save
      </SaveButton>
    </Container>
  );
};

export default App;
