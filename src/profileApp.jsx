import React, { useEffect, useState } from "react";
import { fetchProfile, logout } from "../api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const profileData = await fetchProfile();
                setUser(profileData);
            } catch (err) {
                setError(err.msg || "Error fetching profile");
                navigate("/login");
            }
        };
        getUserProfile();
    }, [navigate]);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
