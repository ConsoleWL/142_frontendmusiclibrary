import SongItem from "../SongItem/SongItem";

const MusicTable = ({ songs }) => {
  const songItem = songs.map((song) => {
    <SongItem
      id={song.id}
      title={song.title}
      artist={song.artist}
      album={song.album}
      genre={song.genre}
    />;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>genre</th>
        </tr>
      </thead>
      <tbody>{songItem}</tbody>
    </table>
  );
};

export default MusicTable;
