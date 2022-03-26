import React from "react";
import { useQuery } from "react-query";
import Layout from "../Layout/Layout";
import http from "../Services/httpServices";

const fetchUser = (email) => {
  return http.get(`/users/${email}`);
};

const fetchChannelByChannelId = (channelId) => {
  return http.get(`/channels/${channelId}`);
};

function RQDependentPage({ email }) {
  const { data: user } = useQuery(["rquser", email], () => fetchUser(email));
  const channelId = user?.data.channelId;
  const { data: channel } = useQuery(
    ["rquserchannel", channelId],
    () => fetchChannelByChannelId(channelId),
    { enabled: !!channelId }
  );
  return (
    <Layout>
      <div className="text-4xl">RQDependetPage</div>
      <h1>name: {user?.data.name}</h1>
      <h1>email: {user?.data.id}</h1>
      <h1>channel: {channel?.data.id}</h1>
    </Layout>
  );
}

export default RQDependentPage;
