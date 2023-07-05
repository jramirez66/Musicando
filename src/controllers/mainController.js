const controller = {
    canciones: async (req, res) => {
        try {
            const canciones = await Cancion.findAll();
            res.json(canciones);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las canciones' });
        }
    },

    cancionesCrear: async (req, res) => {
        const { titulo, duracion, generoId } = req.body;

        try {
            const cancion = await Cancion.create({ titulo, duracion, generoId });
            res.status(201).json(cancion);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear la canción' });
        }
    },

    cancionesObtener: async (req, res) => {
        const { id } = req.params;

        try {
            const cancion = await Cancion.findByPk(id);
            if (cancion) {
                res.json(cancion);
            } else {
                res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener la canción' });
        }
    },

    cancionesEditar: async (req, res) => {
        const { id } = req.params;
        const { titulo, duracion, generoId } = req.body;

        try {
            const cancion = await Cancion.findByPk(id);
            if (cancion) {
                cancion.titulo = titulo;
                cancion.duracion = duracion;
                cancion.generoId = generoId;
                await cancion.save();
                res.json(cancion);
            } else {
                res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al editar la canción' });
        }
    },

    cancionesEliminar: async (req, res) => {
        const { id } = req.params;

        try {
            const cancion = await Cancion.findByPk(id);
            if (cancion) {
                await cancion.destroy();
                res.json({ message: 'Canción eliminada correctamente' });
            } else {
                res.status(404).json({ error: 'Canción no encontrada' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar la canción' });
        }
    },

    generos: async (req, res) => {
        try {
            const generos = await Genero.findAll({ include: Cancion });
            res.json(generos);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener los géneros' });
        }
    },
};

    module.exports = controller;