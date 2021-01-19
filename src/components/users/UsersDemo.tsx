import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedUserIdState, selectedUserQuery } from "../../bl/users";

export function UsersDemo() {
  const [selectedUserId, setSelectedUserId] = useRecoilState(
    selectedUserIdState
  );
  const selectedUser = useRecoilValue(selectedUserQuery);

  return (
    <div className="UsersDemo">
      <input
        type="number"
        value={String(selectedUserId)}
        onChange={(e) => setSelectedUserId(Number(e.target.value) || 0)}
      />
      {selectedUser ? (
        <div>
          <h3>User:</h3>
          <div>ID: {selectedUser.id}</div>
          <div>Name: {selectedUser.name}</div>
        </div>
      ) : (
        <h3>Type user id to start...</h3>
      )}
    </div>
  );
}
