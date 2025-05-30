import React, { useState } from 'react';
import Landing from './components/Landing';
import PopupForm from './components/PpopupForm';  
import DataTable from './components/DataTable';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (formData) => {
    setSubmittedData([...submittedData, formData]);
  };

  return (
    <div>
      <Landing onStart={() => setShowForm(true)} />
      {showForm && (
        <PopupForm onClose={() => setShowForm(false)} onSubmit={handleFormSubmit} />
      )}
      <DataTable data={submittedData} />
    </div>
  );
};

export default App;
