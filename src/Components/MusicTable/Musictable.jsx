import SongItem from "../SongItem/SongItem";

const MusicTable = ({ songs }) => {
  //   console.log(songs);
  const songItem = songs.map((song) => <SongItem song={song} />);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Realese Data</th>
          <th>Genre</th>
          <th>Likes</th>
        </tr>
      </thead>
      <tbody>{songItem}</tbody>
    </table>
  );
};

export default MusicTable;
