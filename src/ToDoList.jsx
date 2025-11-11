import React, { useState } from "react";
import './App.css';
import { FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa";

export default function Page() {
  const [table, setTable] = useState([]);
  const [id, setId] = useState(1);
  const [Handlung, setHandlung] = useState({
    nom: "",
    minnomber: "",
    maxnomber: "",
  });
  const [modifId, setModifId] = useState(null);

  const ajouter = (e) => {
    e.preventDefault();

    if (modifId) {
      setTable(
        table.map((t) =>
          t.id === modifId ? { ...Handlung, id: modifId, completed: false } : t
        )
      );
      setModifId(null);
    } else {
      setTable([...table, { ...Handlung, id, completed: false }]);
      setId(id + 1);
    }

    setHandlung({ nom: "", minnomber: "", maxnomber: "" });
  };

  const supprimer = (id) => {
    setTable(table.filter((t) => t.id !== id));
  };

  const modifier = (t) => {
    setHandlung(t);
    setModifId(t.id);
  };

  const completer = (id) => {
    setTable(
      table.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="container">
      <h1> To-Do App</h1>

      <form onSubmit={ajouter} className="form">
        <input
          type="text"
          placeholder="Nom de la tâche..."
          value={Handlung.nom}
          onChange={(e) => setHandlung({ ...Handlung, nom: e.target.value })}
        />
        <input
          type="number"
          placeholder="MIN"
          value={Handlung.minnomber}
          onChange={(e) =>
            setHandlung({ ...Handlung, minnomber: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="MAX"
          value={Handlung.maxnomber}
          onChange={(e) =>
            setHandlung({ ...Handlung, maxnomber: e.target.value })
          }
        />
        <button type="submit" className={modifId ? "edit-btn" : "add-btn"}>
          {modifId ? "Modifier" : "Ajouter"}
        </button>
      </form>

      <div className="tasks">
        {table.length === 0 && <p className="empty">Aucune tâche pour le moment.</p>}

        {table.map((t) => (
          <div
            key={t.id}
            className={`task-card ${t.completed ? "completed" : ""}`}
          >
            <div className="task-info">
              <h3>{t.nom}</h3>
              <p>({t.minnomber} → {t.maxnomber})</p>
            </div>

            <div className="task-buttons">
              <button onClick={() => supprimer(t.id)} className="delete-btn">
                <FaTrash />
              </button>
              <button onClick={() => modifier(t)} className="modify-btn">
                <FaEdit />
              </button>

              {/* Bouton Compléter : juste icône si completed */}
              <button onClick={() => completer(t.id)} className="complete-btn">
                <FaCheckCircle color={t.completed ? "green" : "gray"} />              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
